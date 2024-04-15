import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export default function Variants() {
  return (
    <Stack >
          <div style={{width:'95%', display:'flex',justifyContent:'space-between'}} >
              <div style={{width:'70%'}} >
                <Skeleton variant="rounded" style={{width:'100%',height:'200px'}} /> <br></br>
                <Skeleton variant="rounded" style={{width:'100%',height:'200px'}} />
              </div>
              <div style={{width:'20%'}} >
                <Skeleton variant="rounded" style={{width:'120%',height:'200px'}} />
              </div>
          </div>
    </Stack>
  );
}