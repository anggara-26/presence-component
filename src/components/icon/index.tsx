import * as iconSVG from "../../icons";

export const iconTypesProps = {
  article: iconSVG.IArticle,
  "circle-plus": iconSVG.ICirclePlus,
  cross: iconSVG.ICross,
  history: iconSVG.IHistory,
  house: iconSVG.IHouse,
  pen: iconSVG.IPen,
  qrCode: iconSVG.IQRCode,
  search: iconSVG.ISearch,
  trash: iconSVG.ITrash,
  user: iconSVG.IUser,
};

const iconSizeProps = {
  small: 16,
  medium: 24,
  large: 32,
};

interface IconProps {
  type: keyof typeof iconTypesProps;
  size?: keyof typeof iconSizeProps;
}

const Icon = ({ type, size = "medium", ...props }: IconProps) => {
  const IconSvg = iconTypesProps[type];
  const iconSize = iconSizeProps[size];
  return <IconSvg size={iconSize} {...props} />;
};

export default Icon;
