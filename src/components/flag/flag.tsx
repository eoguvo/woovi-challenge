import { FlagWrapper } from "@/components/flag/styles";
import { Typography } from "@mui/material";

type FlagProps = {
  title: string;
  content: string;
  shouldRender?: boolean;
};

const Flag = function({ title, content, shouldRender = true }: FlagProps) {
  if (!shouldRender) {
    return null;
  }
  return (
    <FlagWrapper>
      <Typography variant="body1" component="p" color="white" fontWeight={800}>
        {title}
      </Typography>
      <Typography variant="body1" component="p" color="white">
        {content}
      </Typography>
    </FlagWrapper>
  );
};

export default Flag;
