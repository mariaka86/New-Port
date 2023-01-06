
import React from "react";
import Card from '@mui/material/Card';
import { projects } from "../data";
import { CardContent, CardMedia, Typography,Box } from "@mui/material";
import Grid from '@mui/material/Grid';


export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">

          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
            fuga dolore.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-100 p-4">

<Grid container spacing={2}>
<Grid item xs={5}>
  <Box>
                  <div className="card">
                    <Card sx={{ maxWidth: 345 }} className="px-8 py-10 relative z-10 w-full border-4 ">
                      <CardContent className="title-font text-lg font-medium text-white mb-3">
                        <CardMedia
                          component="img"
                          alt="projects"
                          className="projectPic"
                          image={project.image}
                          height="140"
                        />
                        <Typography gutterBottom variant="h4" component="div">
                          {project.title}
                        </Typography>

                        <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                          {project.subtitle}
                        </h2>
                        <Typography variant="body2" color="text.secondary">{project.description}</Typography>
                      </CardContent>
                    </Card>
                  </div>
                  </Box>
                  </Grid>
                  </Grid>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}