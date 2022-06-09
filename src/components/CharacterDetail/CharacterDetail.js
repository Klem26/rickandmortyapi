import ImageListItem from "@mui/material/ImageListItem";
import Grid from "@mui/material/Grid";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
  borderRadius: "20%",
});

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
function CharacterDetail({ character }) {
  return (
    <Grid container spacing={3}>
      <Grid item>
        <ImageListItem sx={{ width: 310, height: 310 }}>
          <Img src={character.image} alt={character.name} />
        </ImageListItem>
      </Grid>
      <Grid item xs={12} sm container>
        <Grid item xs container direction="column" spacing={4}>
          <Grid item xs>
            <Typography gutterBottom variant="subtitle1" component="div">
              {character.name}
            </Typography>
            <Typography variant="body2" gutterBottom>
              {character.species}
            </Typography>
            <Typography variant="body2" gutterBottom>
              {character.gender}
            </Typography>
            <Typography variant="body2" gutterBottom>
              {character.status}
            </Typography>
            <Grid item>
              <Link href={character.location.url} underline="none">
                {character.location.name}
              </Link>
            </Grid>
            <Typography variant="body2" gutterBottom>
              {character.created}
            </Typography>

            <Grid item>
              <Box sx={{ flexGrow: 1 }}>
                <Grid
                  container
                  spacing={{ xs: 2, md: 3 }}
                  columns={{ xs: 4, sm: 6, md: 20 }}
                >
                  {character.episode.map((index, episode) => (
                    <Grid item xs={2} sm={4} md={4} key={index}>
                      <Item>
                        <Link href={index}>{episode + 1 + " "}Episode</Link>
                      </Item>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default CharacterDetail;
