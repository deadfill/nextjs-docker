import { DetailedHTMLProps, Dispatch, InputHTMLAttributes, SetStateAction } from "react";

export interface SearchProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    opened: boolean
    setOpened: Dispatch<SetStateAction<boolean>>

}