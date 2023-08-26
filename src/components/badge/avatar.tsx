interface AvatarProps {
  /**
   * Where the image is stored?
   */
  src?: string;
  /**
   * What name to use for initial
   */
  name?: string;
  /**
   * How large should the badge be?
   */
  size?: "medium" | "large";
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * What font color to use
   */
  color?: string;
}

/**
 * Primary UI component for user interaction
 */
export const Avatar = ({
  src,
  name = "P",
  size = "medium",
  backgroundColor = "#6E5DE7",
  color = "#FFFFFF",
  ...props
}: AvatarProps) => {
  if (src)
    return (
      <img
        src={src}
        className={`presence-avatar presence-avatar--${size} `}
        style={{ backgroundColor, color }}
      />
    );
  return (
    <div
      className={`presence-avatar presence-avatar--${size}`}
      style={{ backgroundColor, color }}
      {...props}
    >
      {name[0]}
    </div>
  );
};
