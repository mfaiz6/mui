import { AppBar, styled, Toolbar, Typography } from "@mui/material"
import { AcUnit } from "@mui/icons-material";

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
})

const Navbar = () => {
    return (
        <AppBar position="sticky">
            <StyledToolbar>
                <Typography variant="h5" component="h1" sx={{display: {xs: "none", sm: "block"}}}>mfaiz</Typography>
                <AcUnit />
            </StyledToolbar>
        </AppBar>
    )
}

export default Navbar