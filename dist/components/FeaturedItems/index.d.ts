import { ReactNode } from "react";
type TFeature = {
    key: string;
    title: string;
    paragraph: string;
    icon: ReactNode;
};
type Props = {
    features: TFeature[];
};
declare function FeaturedItems({ features }: Props): JSX.Element;
export default FeaturedItems;
