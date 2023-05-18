import { Box, Grid, List, ListItem, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";

function GridSolution({ item, i }) {
  const [active, setActive] = useState(false);
  return (
    <Grid
      key={i}
      container
      item
      justifyContent="space-between"
      className={`selectorGrid ${active?'active':''}`}
      sx={{
        borderTop: "1px solid #707070",
        position: "relative",
        paddingTop: { lg: 6, xs: 2 },
        paddingBottom: { lg: 6, xs: 2 },
        display: { lg: "flex", xs: "block" },
      }}
    >
      <Grid item lg={5}>
        <Stack direction="row" gap={4} alignItems="center">
          <Image
            src={item.icon.src}
            width={item.icon.width}
            height={item.icon.height}
            alt={item.title}
            className="solutionIcon"
          />
          <Typography
            component="h4"
            sx={{ fontSize: { lg: "40px", sm: "20px" } }}
            fontWeight={600}
          >
            {item.title}
          </Typography>
        </Stack>
      </Grid>
      <Grid item lg={5} sx={{ display: { lg: "flex", xs: "block" } }}>
        <Stack
          direction="row"
          gap={2}
          alignItems="center"
          justifyContent="space-between"
          sx={{ display: { lg: "flex", xs: "block" }, width: "100%" }}
        >
          <List className="list-pointer">
            {item.list.map((list) => (
              <ListItem
                key={list}
                alignItems="center"
                sx={{ padding: "0 0 12px" }}
              >
                <Box
                  component="span"
                  mr={1}
                  sx={{
                    width: "7px",
                    height: "7px",
                    border: "1px solid #000",
                    borderRadius: "50%",
                  }}
                ></Box>
                {list}
              </ListItem>
            ))}
          </List>
          <Box className="arrowIcon" >
            
            <span onClick={() => {console.log('click');setActive(!active)}}>
            {/* <span
            
              
            dangerouslySetInnerHTML={{
              __html: arrow,
            }}
          /> */}
            <img src="/solutionArrow.svg"/>
            </span>
          </Box>
          <Box className="thumbnailImage">
            <Image
              src={item.thumbnail}
              width={450}
              height={500}
              alt={item.title}
            />
          </Box>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default GridSolution;
