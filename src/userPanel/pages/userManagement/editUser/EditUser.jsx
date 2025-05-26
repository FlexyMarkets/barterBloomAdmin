import { Container } from "@mui/material"
import ProfileUpdate from "./profileUpdate/ProfileUpdate"

function EditUser() {
    return (
        <Container sx={{ mt: "100px" }}>
            <ProfileUpdate />
        </Container>
    )
}

export default EditUser;