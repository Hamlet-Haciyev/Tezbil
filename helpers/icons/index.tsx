import React from "react";

interface IIcon {
  height?: string;
  width?: string;
  name: string;
}

const HomeIcon = ({ height = "24", width = "24" }: IIcon) => {
  return (
    <svg
      height={height}
      width={width}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.5 17.5a2.5 2.5 0 1 0-5 0v5a.625.625 0 0 1-.533.618l-.092.007H4.5a.625.625 0 0 1-.618-.533l-.007-.092v-9.375H.75a.625.625 0 0 1-.505-.995l.063-.072L11.558.808a.625.625 0 0 1 .797-.072l.087.072 11.25 11.25c.37.37.145.989-.347 1.06l-.095.007h-3.125V22.5a.625.625 0 0 1-.533.618l-.092.007h-4.375a.625.625 0 0 1-.625-.625v-5Z"
        className="icon_svg-fill_as_stroke"
        fill="#666"
      ></path>
    </svg>
  );
};
const FollowingIcon = ({ height = "24", width = "24" }: IIcon) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      width={width}
      viewBox="0 0 24 24"
    >
      <path
        className="icon_svg-fill_as_stroke"
        d="M12 11.375c2.276 0 4.125 1.823 4.125 4.076V22.5c0 .345-.28.625-.625.625h-7a.625.625 0 0 1-.625-.625v-7.049c0-2.253 1.849-4.076 4.125-4.076zm-7-2c1.376 0 2.638.671 3.403 1.771a.625.625 0 1 1-1.027.713A2.884 2.884 0 0 0 5 10.624c-1.533 0-2.783 1.178-2.87 2.66l-.005.166-.001 8.424h4.127c.314 0 .574.231.618.533l.007.092a.624.624 0 0 1-.533.618l-.092.007H1.5a.624.624 0 0 1-.618-.533L.875 22.5v-9.049c0-2.253 1.849-4.076 4.125-4.076zm14.001 0c2.276 0 4.125 1.823 4.125 4.076V22.5l-.007.092a.626.626 0 0 1-.618.533H17.75l-.092-.007a.626.626 0 0 1-.533-.618l.007-.092a.626.626 0 0 1 .618-.533h4.126v-8.424l-.005-.166c-.087-1.482-1.337-2.66-2.87-2.66-.963 0-1.844.468-2.377 1.235a.625.625 0 1 1-1.027-.713A4.133 4.133 0 0 1 19 9.375zM12 12.625c-1.59 0-2.875 1.267-2.875 2.826v6.424h5.75v-6.424c0-1.503-1.195-2.735-2.706-2.821zm0-10a3.86 3.86 0 0 1 2.641 1.039c.743.652 1.234 1.541 1.234 2.461v.625A3.89 3.89 0 0 1 12 10.375a3.875 3.875 0 0 1-3.867-3.624l-.008-.001v-.625c0-.919.491-1.809 1.234-2.461A3.861 3.861 0 0 1 12 2.625zm2.613 4.126H9.387a2.625 2.625 0 0 0 5.226 0zM19.192.625h.158l.082.003.073.004.048.003.111.011.033.004-.144-.015a3.875 3.875 0 0 1 3.432 2.831 3.87 3.87 0 0 1 .135 1.237l-.002 2.176.022.188.025.152.012.06.059.012c.376.096.655.549.392.947l-.056.074a2.34 2.34 0 0 1-.429.381c-.848.596-1.86.578-2.695-.443l-.042-.053a3.87 3.87 0 0 1-3.362-.512.625.625 0 1 1 .712-1.028 2.626 2.626 0 0 0 2.672.188c.639-.453.834-1.328.415-2.046-.049-.097-.196-.263-.419-.458a7.85 7.85 0 0 0-.569-.448l-.819-.549-.042-.027-1.875 1.237a.625.625 0 0 1-.839-.14l-.053-.082-.452-.823a.63.63 0 0 1-.108-.321v-.02a.627.627 0 0 1 .056-.282A3.875 3.875 0 0 1 18.355.729l.042-.009.151-.032.03-.005.353-.046.06-.004.147-.007zm-14.505 0h.093l.103.002.086.004.118.008.104.01.072.009.123.019.082.014.07.014.314.079.042.013a3.85 3.85 0 0 1 .666.275c.148.079.292.167.429.264a3.86 3.86 0 0 1 .649.578l.113.132c.102.125.195.254.28.39l.057.094.005.009a3.89 3.89 0 0 1 .186.359.667.667 0 0 1 .048.158c.05.216.042.44-.018.634-.134.503-.531.948-1.088.948-.372 0-.678-.203-1.034-.56l-.354-.392-.158-.198-.309.253c-.297.23-.612.446-.949.649l-.344.198a6.762 6.762 0 0 1-1.882.491 2.62 2.62 0 0 0 1.04 1.56 2.626 2.626 0 0 0 3.014.018.625.625 0 1 1 .712 1.028 3.876 3.876 0 0 1-6.071-3.48 3.86 3.86 0 0 1 .248-1.099l.026-.064.047-.112.04-.087.023-.049.036-.072.025-.048.057-.103.03-.052.064-.104.048-.074.062-.09.054-.074.056-.073.07-.087.054-.063.063-.071.068-.072.069-.07.069-.066.063-.058.097-.084.047-.039.086-.068.074-.056.091-.065.066-.044.099-.063.063-.038.103-.059.072-.038.087-.044.095-.045.089-.039.094-.039.072-.028.116-.041.062-.02.151-.045.2-.049-.189.046.18-.044.027-.006.152-.029.082-.013.113-.015.067-.007.09-.008.058-.004L4.55.63l.096-.004z"
        fill="#666"
      ></path>
    </svg>
  );
};
const AnswerIcon = ({ height = "24", width = "24" }: IIcon) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      width={width}
      viewBox="0 0 24 24"
    >
      <path
        className="icon_svg-fill_as_stroke"
        d="M20.582 1.469a2.757 2.757 0 0 1 1.369 4.468l-.134.143L7.594 20.299a.615.615 0 0 1-.129.099l-.073.036-1.238.514.006.006-.1.033-3.82 1.59a.615.615 0 0 1-.662-.116l-.058.019.019-.058a.615.615 0 0 1-.147-.569l.031-.093 1.592-3.831.031-.089.005.005.515-1.237a.637.637 0 0 1 .081-.141l.054-.061L17.92 2.182a2.756 2.756 0 0 1 2.662-.713zm.918 8.406c.314 0 .574.231.618.533l.007.092v11a.624.624 0 0 1-.533.618l-.092.007h-11a.625.625 0 0 1-.092-1.243l.092-.007h10.375V10.5c0-.314.231-.574.533-.618l.092-.007zm-2.577-6.916-.119.107L4.673 17.201l-.666 1.6 1.19 1.19 1.601-.665 14.136-14.13c.304-.304.46-.72.439-1.14l-.016-.158-.033-.157a1.504 1.504 0 0 0-2.4-.782zM13.5 1.875a.625.625 0 0 1 .092 1.243l-.092.007H3.124L3.125 13.5a.624.624 0 0 1-.533.618l-.092.007a.624.624 0 0 1-.618-.533l-.007-.092v-11c0-.314.231-.574.533-.618l.092-.007h11z"
        fill="#666"
      ></path>
    </svg>
  );
};
const NotificationIcon = ({ height = "24", width = "24" }: IIcon) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      width={width}
      viewBox="0 0 24 24"
    >
      <path
        className="icon_svg-fill_as_stroke"
        d="M7.526 20.785H2.79a.625.625 0 0 1-.625-.625v-2.87c0-.283.19-.53.463-.604a3.359 3.359 0 0 0 2.093-1.655c.207-.456.349-1.126.426-1.944a18.81 18.81 0 0 0 .044-2.578l-.025-.44a6.84 6.84 0 0 1 4.402-6.386 2.54 2.54 0 0 1 4.133-2.658 2.54 2.54 0 0 1 .692 2.678 6.866 6.866 0 0 1 4.346 6.415l-.022.381a19.11 19.11 0 0 0 .046 2.585c.076.811.214 1.476.415 1.932a3.376 3.376 0 0 0 2.079 1.657.625.625 0 0 1 .459.603v2.885c0 .345-.28.625-.625.625h-4.616a4.93 4.93 0 0 1-8.948 0zm1.432 0a3.68 3.68 0 0 0 6.084 0H8.958zm-1.155-1.25a.62.62 0 0 1 .273 0h7.847a.62.62 0 0 1 .273 0h4.269v-1.81a4.62 4.62 0 0 1-2.402-2.143l-.018-.037c-.272-.605-.439-1.399-.527-2.346a20.211 20.211 0 0 1-.05-2.758l.022-.371a5.594 5.594 0 0 0-4.219-5.418A6.03 6.03 0 0 0 12 4.485h-.089a6.048 6.048 0 0 0-1.291.186.713.713 0 0 1-.12.019c-2.358.657-4.083 2.813-4.087 5.331l.026.43c.042.89.037 1.847-.048 2.754-.089.945-.257 1.738-.548 2.377a4.623 4.623 0 0 1-2.428 2.161v1.793h4.389zm2.969-16.189a6.907 6.907 0 0 1 1.104-.111h.133c.402.006.796.048 1.178.121a1.29 1.29 0 0 0-2.078-1.409 1.29 1.29 0 0 0-.337 1.4z"
        fill="#666"
      ></path>
    </svg>
  );
};
const SearchIcon = ({ height = "24", width = "24" }: IIcon) => {
  return (
    <svg
      height={height}
      width={width}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Zm10.45 2.95L16 16l4.95 4.95Z"
        className="icon_svg-stroke"
        stroke="#666"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};
const AskIcon = ({ height = "24", width = "24" }: IIcon) => {
  return (
    <svg
      height={height}
      width={width}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        className="icon_svg-stroke"
        stroke="#666"
        strokeWidth="1.5"
        fill="none"
        fillRule="evenodd"
      >
        <g transform="translate(9 7)">
          <path
            d="M3 6v-.5A2.5 2.5 0 1 0 .5 3"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <circle
            className="icon_svg-fill_as_stroke"
            fill="#666"
            cx="3"
            cy="8.5"
            r="1"
            stroke="none"
          ></circle>
        </g>
        <path
          d="M7.5 4h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-3L9 22v-3H7.5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3Z"
          strokeLinejoin="round"
        ></path>
      </g>
    </svg>
  );
};
const QuestAnswerIcon = ({ height = "24", width = "24" }: IIcon) => {
  return (
    <svg
      height={height}
      width={width}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g strokeWidth="1.5" fill="none" fillRule="evenodd">
        <path
          d="M18.571 5.429h0a2 2 0 0 1 0 2.828l-9.9 9.9-4.24 1.416 1.412-4.245 9.9-9.9h0a2 2 0 0 1 2.828 0Z"
          className="icon_svg-stroke"
          stroke="#666"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          className="icon_svg-fill_as_stroke"
          fill="#666"
          d="m4.429 19.571 2.652-.884-1.768-1.768z"
        ></path>
        <path
          d="M14.5 19.5h5v-5m-10-10h-5v5"
          className="icon_svg-stroke"
          stroke="#666"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </g>
    </svg>
  );
};
const PostIcon = ({ height = "24", width = "24" }: IIcon) => {
  return (
    <svg
      height={height}
      width={width}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="none" fillRule="evenodd">
        <path
          d="M18.571 5.429h0a2 2 0 0 1 0 2.828l-9.9 9.9-4.24 1.416 1.412-4.245 9.9-9.9a2 2 0 0 1 2.828 0Z"
          className="icon_svg-stroke"
          stroke="#666"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          className="icon_svg-fill_as_stroke"
          fill="#666"
          d="m4.429 19.571 2.652-.884-1.768-1.768z"
        ></path>
      </g>
    </svg>
  );
};
const EditIcon = ({ height = "24", width = "24" }: IIcon) => {
  return (
    <svg
      height={height}
      width={width}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.25 11.25a1.06 1.06 0 1 0 1.5 1.5 1.06 1.06 0 0 0-1.5-1.5Zm-7 0a1.06 1.06 0 1 0 1.5 1.5 1.06 1.06 0 0 0-1.5-1.5Zm14 0a1.06 1.06 0 1 0 1.5 1.5 1.06 1.06 0 0 0-1.5-1.5Z"
        fill="#666"
        stroke="#666"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};
const CloseIcon = ({ height = "24", width = "24" }: IIcon) => {
  return (
    <svg
      height={height}
      width={width}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m16.243 7.757-8.486 8.486m8.486 0L7.757 7.757"
        className="icon_svg-stroke"
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        stroke="#666"
        strokeWidth="1.5"
      ></path>
    </svg>
  );
};
const ShareIcon = ({ height = "24", width = "24" }: IIcon) => {
  return (
    <svg
      height={height}
      width={width}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        className="icon_svg-stroke"
        stroke="#666"
        strokeWidth="1.5"
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
      >
        <path d="M19.748 10a8.003 8.003 0 0 0-15.496.002m.001 4.003a8.003 8.003 0 0 0 15.494 0"></path>
        <path d="m2.5 7.697 1.197 3.289 3.289-1.197m14.5 6.5L20.289 13 17 14.197"></path>
      </g>
    </svg>
  );
};
const CommentIcon = ({ height = "24", width = "24" }: IIcon) => {
  return (
    <svg
      height={height}
      width={width}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.071 18.86c4.103 0 7.429-3.102 7.429-6.93C19.5 8.103 16.174 5 12.071 5s-7.429 3.103-7.429 6.93c0 1.291.379 2.5 1.037 3.534.32.501-1.551 3.058-1.112 3.467.46.429 3.236-1.295 3.803-.99 1.09.585 2.354.92 3.701.92Z"
        className="icon_svg-stroke icon_svg-fill"
        stroke="#666"
        strokeWidth="1.5"
        fill="none"
      ></path>
    </svg>
  );
};
const SharingOptionIcon = ({ height = "24", width = "24" }: IIcon) => {
  return (
    <svg
      height={height}
      width={width}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m21 12-9.778-8v5.333c-1.926.45-3.5 1.172-4.722 2.167-1.222.995-2.389 2.495-3.5 4.5 1.333-.659 2.833-1.157 4.5-1.496 1.667-.34 2.908-.285 3.722.163V20L21 12Z"
        className="icon_svg-stroke"
        stroke="#666"
        fill="none"
        strokeWidth="1.5"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};
const UpVoteIcon = ({ height = "24", width = "24" }: IIcon) => {
  return (
    <svg
      height={height}
      width={width}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 4 3 15h6v5h6v-5h6z"
        className="icon_svg-stroke icon_svg-fill"
        strokeWidth="1.5"
        stroke="rgb(72, 148, 253)"
        fill="none"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};
const DownVoteIcon = ({ height = "24", width = "24" }: IIcon) => {
  return (
    <svg
      height={height}
      width={width}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m12 20 9-11h-6V4H9v5H3z"
        className="icon_svg-stroke icon_svg-fill"
        stroke="#666"
        fill="none"
        strokeWidth="1.5"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};
const Icons: any = {
  Home: HomeIcon,
  Follow: FollowingIcon,
  Answer: AnswerIcon,
  Notification: NotificationIcon,
  Search: SearchIcon,
  Ask: AskIcon,
  QuestAnswer: QuestAnswerIcon,
  Post: PostIcon,
  Close: CloseIcon,
  Edit: EditIcon,
  Share: ShareIcon,
  Comment: CommentIcon,
  SharingOption: SharingOptionIcon,
  UpVote: UpVoteIcon,
  DownVote: DownVoteIcon,
};
const Icon = ({ name, width, height }: IIcon) => {
  let Component = Icons[name];

  return <Component height={height} width={width} />;
};
export default Icon;
