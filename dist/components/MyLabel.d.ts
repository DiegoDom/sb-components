/// <reference types="react" />
import './mylabel.css';
export interface MyLabelProps {
    /**
     * Show all capitalized label?
     */
    allCaps?: boolean;
    /**
     * What color to use
     */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * Label contents
     */
    label: string;
    /**
     * How large should the label be?
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * What font color to use
     */
    fontColor?: string;
}
export declare const MyLabel: ({ allCaps, color, label, size, fontColor }: MyLabelProps) => JSX.Element;
