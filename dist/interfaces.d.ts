export interface ShareData {
    text?: string;
    title?: string;
    url?: string;
    files?: File[];
}
export interface RWebShareProps {
    children: any;
    closeText?: string;
    data: ShareData;
    sites?: string[];
    onClick?: any;
}
export interface SocialIconsProps {
    onClose: any;
    closeText?: string;
    sites: string[];
    data: Required<ShareData>;
    onClick?: any;
}
export interface IconProps {
    onClose: any;
    name: string;
    data: Required<ShareData>;
    onClick?: any;
}
