import { AppBar, Avatar, Badge, Box, InputBase, styled, Toolbar, Typography } from "@mui/material"
import { AcUnit, Mail, Notifications } from "@mui/icons-material";


const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
})

const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%"
}))

const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.up("sm")]: {
        display: "flex"
    }
}))

const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    [theme.breakpoints.up("sm")]: {
        display: "none"
    }
}))



const Navbar = () => {
    return (
        <AppBar position="sticky">
            <StyledToolbar>
                <Typography variant="h5" component="h1" sx={{ display: { xs: "none", sm: "block" } }}>mfaiz</Typography>
                <AcUnit sx={{ display: { xs: "block", sm: "none" } }} />
                <Search><InputBase placeholder="search..." /></Search>
                <Icons>
                    <Badge badgeContent={2} color="error">
                        <Mail />
                    </Badge>
                    <Badge badgeContent={3} color="error">
                        <Notifications />
                    </Badge>
                    <Avatar sx={{ width: 30, height: 30 }} src="https://images.pexels.com/photos/15418845/pexels-photo-15418845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                </Icons>
                <UserBox>
                    <Avatar sx={{ width: 30, height: 30 }} src="https://images.pexels.com/photos/15418845/pexels-photo-15418845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    <Typography variant="span">Kia</Typography>
                </UserBox>
            </StyledToolbar>
        </AppBar>
    )
}

export default Navbar