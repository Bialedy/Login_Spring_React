import { Palette } from "@mui/icons-material";
import { createTheme} from "@mui/material/styles";

const theme = createTheme(
    {
        palette:{
           primary:{
            main: '#f3658d', 
           } , 
           secondary:{
            main: '#e2ab44' ,
           },
        },
    });

    export default theme;