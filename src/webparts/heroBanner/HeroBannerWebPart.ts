import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  IPropertyPaneDropdownOption,
  PropertyPaneDropdown,
  // PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import HeroBanner from './components/HeroBanner';
import { IHeroBannerProps } from './components/IHeroBannerProps';
import { defaultLibValue } from '../../shared/constants';
import { Web } from '@pnp/sp/webs';
import "@pnp/sp/lists";
import "@pnp/sp/items";

export interface IHeroBannerWebPartProps {
  listID: string;
}

export default class HeroBannerWebPart extends BaseClientSideWebPart<IHeroBannerWebPartProps> {
  private libraryNames: IPropertyPaneDropdownOption[];
  private defaultListID:any;
  public render(): void {
    const element: React.ReactElement<IHeroBannerProps> = React.createElement(
      HeroBanner,
      {
        context:this.context,
        listID:this.properties.listID != null && this.properties.listID != undefined ? this.properties.listID: this.defaultListID,
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected async onInit(): Promise<void> {
        await this.getAllLibraries();
  }

  protected async getAllLibraries(){
    try {
      let objWeb = Web(this.context.pageContext.web.absoluteUrl)
      //BaseTemplate eq 101 and
      let lists = await objWeb.lists.filter("(BaseTemplate eq 101 or BaseTemplate eq 119) and hidden eq false").get()
      this.libraryNames = lists.map((item) => {
        return {
          key: item.Id,
          text: item.Title
        }
      });

      this.defaultListID = this.libraryNames.filter(x=> x.text.toLocaleLowerCase() ===defaultLibValue.toLocaleLowerCase()).length > 0 ? this.libraryNames.filter(x=> x.text.toLocaleLowerCase() ===defaultLibValue.toLocaleLowerCase())[0].key : "" ;

    } catch (error) {
      console.log(error)
    }
  }


  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: "Hero Banner Configuration"
          },
          groups: [
            {
              // groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneDropdown('listID', {
                  label: "Library",
                  options: this.libraryNames,
                  selectedKey: this.defaultListID,
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
