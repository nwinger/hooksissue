import Home from "./home/Home";
import Typography from "./typography/Typography";
import Colors from "./Colors/Colors";
import { RouteComponentProps } from "react-router-dom";
import Nomatch from "./NoMatch";
import Buttons from "./Components/Buttons/Buttons";
import Links from "./Components/Links/Links";
import Inputs from "./Components/Inputs/Inputs";

export interface IRoute {
  path?: string;
  exact?: boolean;
  label: string;
  component?:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>;
  hidden?: boolean;
  subroutes?: IRoute[];
}

export const routes: IRoute[] = [
  {
    path: "/",
    exact: true,
    label: "Home",
    component: Home
  },
  {
    path: "/typography",
    label: "Typography",
    component: Typography
  },
  {
    path: "/Colors",
    label: "Colors",
    component: Colors
  },

  {
    label: "Components",
    subroutes: [
      {
        label: "Buttons",
        path: "/buttons",
        component: Buttons
      },
      {
        label: "Links",
        path: "/links",
        component: Links
      },
      {
        label: "Inputs",
        path: "/inputs",
        component: Inputs
      }
    ]
  },
  {
    path: "",
    label: "",
    hidden: true,
    component: Nomatch
  }
];
