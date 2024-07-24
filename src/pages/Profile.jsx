import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Box, Modal, Typography } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

// Validation schema using Yup
const profileSchema = yup.object({
  email: yup.string().email('Invalid email format').required('Email is required'),
  password: yup.string().min(8, 'Password must be at least 8 characters').matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
    'Password must contain at least one uppercase letter, one lowercase letter, and one number'
  ),
  address: yup.string().notRequired(),
  state: yup.string().notRequired(),
  pincode: yup.string().notRequired()
});

const changePasswordSchema = yup.object({
  newPassword: yup.string().required('New password is required').min(8, 'Password must be at least 8 characters').matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
    'Password must contain at least one uppercase letter, one lowercase letter, and one number'
  ),
  confirmPassword: yup.string().oneOf([yup.ref('newPassword'), null], 'Passwords must match').required('Confirm password is required')
});

const Profile = () => {
  const [openPasswordModal, setOpenPasswordModal] = useState(false);
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem('user')) || {};
  
  const { register, handleSubmit, control, formState: { errors } } = useForm({
    resolver: yupResolver(profileSchema),
    defaultValues: {
      email: userData.email || '',
      address: userData.address || '',
      state: userData.state || '',
      pincode: userData.pincode || ''
    }
  });
  
  const { handleSubmit: handleChangePasswordSubmit, control: controlChangePassword, formState: { errors: passwordErrors } } = useForm({
    resolver: yupResolver(changePasswordSchema)
  });

  const handleProfileUpdate = (data) => {
    localStorage.setItem('user', JSON.stringify({ ...userData, ...data }));
    alert('Profile updated successfully');
  };

  const handlePasswordChange = (data) => {
    const updatedUser = { ...userData, password: data.newPassword };
    localStorage.setItem('user', JSON.stringify(updatedUser));
    setOpenPasswordModal(false);
    alert('Password updated successfully');
  };

  const handleDeleteAccount = () => {
    if (window.confirm('Are you sure you want to delete your account?')) {
      localStorage.removeItem('user');
      localStorage.removeItem('loggedin');
      navigate('/bliss/login');
    }
  };

  return (
    <Box className="profile-container">
      <Box className="profile-details">
        <h2>Profile Information</h2>
        <form onSubmit={handleSubmit(handleProfileUpdate)} noValidate>
          <TextField
            fullWidth
            margin="normal"
            id="email"
            label="Email"
            variant="outlined"
            {...register('email')}
            error={!!errors.email}
            helperText={errors.email?.message}
            disabled
          />
          <Button variant="outlined" onClick={() => setOpenPasswordModal(true)}>Change Password</Button>
          <TextField
            fullWidth
            margin="normal"
            id="address"
            label="Address"
            variant="outlined"
            {...register('address')}
            error={!!errors.address}
            helperText={errors.address?.message}
          />
          <TextField
            fullWidth
            margin="normal"
            id="state"
            label="State"
            variant="outlined"
            {...register('state')}
            error={!!errors.state}
            helperText={errors.state?.message}
          />
          <TextField
            fullWidth
            margin="normal"
            id="pincode"
            label="Pincode"
            variant="outlined"
            {...register('pincode')}
            error={!!errors.pincode}
            helperText={errors.pincode?.message}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Update Profile
          </Button>
          <Button variant="outlined" color="error" fullWidth onClick={() => setDeleteConfirmation(true)}>
            Delete Account
          </Button>
        </form>
      </Box>
      
      <Modal open={openPasswordModal} onClose={() => setOpenPasswordModal(false)}>
        <Box className="password-modal" sx={{ padding: 2, backgroundColor: 'white', borderRadius: 1 }}>
          <Typography variant="h6">Change Password</Typography>
          <form onSubmit={handleChangePasswordSubmit(handlePasswordChange)} noValidate>
            <TextField
              fullWidth
              margin="normal"
              id="newPassword"
              type="password"
              label="New Password"
              variant="outlined"
              {...register('newPassword')}
              error={!!passwordErrors.newPassword}
              helperText={passwordErrors.newPassword?.message}
            />
            <TextField
              fullWidth
              margin="normal"
              id="confirmPassword"
              type="password"
              label="Confirm Password"
              variant="outlined"
              {...register('confirmPassword')}
              error={!!passwordErrors.confirmPassword}
              helperText={passwordErrors.confirmPassword?.message}
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Change Password
            </Button>
          </form>
        </Box>
      </Modal>

      <Modal open={deleteConfirmation} onClose={() => setDeleteConfirmation(false)}>
        <Box className="confirmation-modal" sx={{ padding: 2, backgroundColor: 'white', borderRadius: 1 }}>
          <Typography variant="h6">Confirm Deletion</Typography>
          <Typography variant="body1">Are you sure you want to delete your account?</Typography>
          <Button variant="contained" color="error" onClick={handleDeleteAccount}>
            Delete
          </Button>
          <Button variant="outlined" onClick={() => setDeleteConfirmation(false)}>
            Cancel
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default Profile;
