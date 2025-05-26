import { Button, Card, Skeleton, Stack, Typography } from '@mui/material'
import { TextField, InputLabel, OutlinedInput, InputAdornment } from '@mui/material'
import Grid from "@mui/material/Grid2"

function ProfileUpdate() {

    return (
        <Stack>
            <Typography variant='h4' fontWeight={"bold"} mb={"2rem"}>Update profile</Typography>
            <Card
                component={"form"}
                sx={{
                    padding: { xs: "1rem", sm: "2rem" },
                    borderRadius: "2rem",
                    boxShadow: "0 0px 0px 0 rgba(0, 0, 0, 0.19), 0 0px 8px 0 rgba(0, 0, 0, 0.19)",
                }}
            >
                <Grid
                    container
                    size={12}
                    spacing={3}
                >
                    <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
                        <InputLabel sx={{ mb: ".5rem" }}>Name</InputLabel>
                        <TextField
                            size='small'
                            placeholder='Your name'
                            fullWidth
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
                        <InputLabel sx={{ mb: ".5rem" }}>Email</InputLabel>
                        <OutlinedInput
                            disabled
                            size='small'
                            placeholder='Your email'
                            fullWidth
                        />
                    </Grid>
                    <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
                        <InputLabel sx={{ mb: ".5rem" }}>Mobile</InputLabel>
                        <OutlinedInput
                            disabled
                            size='small'
                            placeholder='Your mobile'
                            fullWidth
                        />
                    </Grid>
                </Grid>
                <Button
                    type="submit"
                    size="small"
                    // disabled={isLoading}
                    variant="contained"
                    sx={{
                        mt: "1.5em",
                        textTransform: "capitalize",
                        boxShadow: "none",
                        bgcolor: "primary.main",
                        color: "white",
                        alignSelf: "flex-start",
                        "&:hover": {
                            boxShadow: "none"
                        }
                    }}
                >
                    Update
                </Button>
            </Card>
        </Stack>
    )
}

export default ProfileUpdate;