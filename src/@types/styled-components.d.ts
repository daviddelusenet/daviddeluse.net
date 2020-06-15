/* eslint-disable typescript-sort-keys/interface */
import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        // Colors
        primaryBackgroundColor: string;
        secondaryBackgroundColor: string;
        primaryLinkColor: string;
        primaryTextColor: string;
        // Fonts
        primaryFontFamily: string;
    }
}
