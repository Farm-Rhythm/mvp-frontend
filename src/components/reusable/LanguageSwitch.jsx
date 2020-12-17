import { styled } from '@material-ui/core/styles'

import { Button } from "@material-ui/core";
import { ArrowDropUp, Translate } from '@material-ui/icons'

const CustomButton = styled(Button)({
  fontFamily: "karla-Italic",
  textTransform: "none",
});


const LanguageSwitch = () => {
  return (
    <CustomButton variant='outlined' color='inherit' startIcon={<Translate />} endIcon={<ArrowDropUp />} className="py-1">
      English
    </CustomButton>
  );
};

export default LanguageSwitch;
