import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import { InstantSearchServerState } from "react-instantsearch-hooks-web";


export interface LayoutProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode;
    serverState?: InstantSearchServerState;
    serverUrl: string
 }