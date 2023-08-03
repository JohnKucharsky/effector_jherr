import {Button, Grid} from "@chakra-ui/react";
import {load} from "../store.ts";

export default function TopBar(){
    return (
        <Grid pt={2} templateColumns='1fr 1fr' columnGap='3'>
            <div/>
            <Button
            onClick={()=>
                load('https://raw.githubusercontent.com/jherr/todos-four-ways/master/data/todos.json')}
            >Load</Button>
        </Grid>
    )
}