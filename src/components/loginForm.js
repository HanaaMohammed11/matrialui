import React from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Checkbox,
  FormControlLabel,
  Divider,
} from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import BuildIcon from '@mui/icons-material/Build';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import BoltIcon from '@mui/icons-material/Bolt';
import SettingsIcon from '@mui/icons-material/Settings';

function LoginPage() {
  return (
    <Box display="flex" height="100vh">

      <Box
        sx={{
          width: { xs: '100%', sm: '50%', md: '40%' },
          backgroundColor: '#f5f5f5',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 4,
        }}
      >
        <Box>
          <img src="https://th.bing.com/th/id/OIP.5YnOftIXLJU307FZFYYUQQHaHa?rs=1&pid=ImgDetMain" alt="Logo" style={{ marginBottom: '20px' ,width:50 }} />
          
          <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
            <SettingsIcon sx={{ marginRight: '8px' }} />
            Adaptable performance
          </Typography>
          <Typography variant="body1">
            Our product effortlessly adjusts to your needs, boosting efficiency and simplifying your tasks.
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
            <BuildIcon sx={{ marginRight: '8px' }} />
            Built to last
          </Typography>
          <Typography variant="body1">
            Experience unmatched durability that goes above and beyond with lasting investment.
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
            <ThumbUpIcon sx={{ marginRight: '8px' }} />
            Great user experience
          </Typography>
          <Typography variant="body1">
            Integrate our product into your routine with an intuitive and easy-to-use interface.
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
            <BoltIcon sx={{ marginRight: '8px' }} />
            Innovative functionality
          </Typography>
          <Typography variant="body1">
            Stay ahead with features that set new standards, addressing your evolving needs better than the rest.
          </Typography>
        </Box>
      </Box>

  
      <Box
        sx={{
          width: { xs: '100%', sm: '50%', md: '60%' },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 4,
        }}
      >
        <Box sx={{ width: '100%', maxWidth: 400 }}>
          <Typography variant="h4" gutterBottom>
            Sign in
          </Typography>
          <TextField
            margin="normal"
            fullWidth
            label="Email"
            name="email"
            autoComplete="email"
          />
          <TextField
            margin="normal"
            fullWidth
            name="password"
            label="Password"
            type="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 2, mb: 2 }}
          >
            Sign in
          </Button>
          <Box display="flex" justifyContent="space-between">
            <Button href="#" sx={{ textTransform: 'none' }}>
              Forgot your password?
            </Button>
            <Button href="#" sx={{ textTransform: 'none' }}>
              Don't have an account? Sign up
            </Button>
          </Box>
          <Divider sx={{ my: 2 }}>or</Divider>
          <Button
            fullWidth
            variant="outlined"
            startIcon={<GoogleIcon />}
            sx={{ textTransform: 'none', mb: 1 }}
          >
            Sign in with Google
          </Button>
          <Button
            fullWidth
            variant="outlined"
            startIcon={<FacebookIcon />}
            sx={{ textTransform: 'none' }}
          >
            Sign in with Facebook
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default LoginPage;
