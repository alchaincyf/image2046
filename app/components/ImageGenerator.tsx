import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Box, Typography, Grid, LinearProgress, Step, Stepper, StepLabel } from '@mui/material';

const steps = ['生成优化提示词', '生成图片', '完成'];

const ImageGenerator: React.FC = () => {
  const [userDescription, setUserDescription] = useState('');
  const [generatedImages, setGeneratedImages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setActiveStep(0);
    setProgress(0);

    try {
      // 生成优化提示词
      setProgress(33);
      const promptResponse = await axios.post('/api/generate-prompt', {
        userDescription
      });
      const optimizedPrompt = promptResponse.data.prompt;
      setActiveStep(1);

      // 生成图片
      setProgress(66);
      const imageResponse = await axios.post('/api/generate-image', {
        prompt: optimizedPrompt,
      });
      setGeneratedImages(imageResponse.data.images.map((img: { url: string }) => img.url));
      setActiveStep(2);
      setProgress(100);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        if (error.response.status === 504) {
          setError('服务器响应超时，请稍后重试或尝试简化您的描述。');
        } else {
          setError(`图片生成失败 (错误代码: ${error.response.status})，请稍后重试。`);
        }
      } else {
        setError('图片生成过程中发生未知错误，请稍后重试。');
      }
      console.error('Error generating image:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ '& > *': { mb: 2 } }}>
      <TextField
        fullWidth
        label="描述你想要的图片"
        variant="outlined"
        value={userDescription}
        onChange={(e) => setUserDescription(e.target.value)}
        required
        multiline
        rows={4}
      />
      <Button
        type="submit"
        variant="contained"
        disabled={isLoading}
        sx={{
          fontSize: '1.1rem',
          padding: '10px 20px',
          backgroundColor: '#2ecc71',
          '&:hover': {
            backgroundColor: '#27ae60'
          }
        }}
      >
        {isLoading ? '生成中...' : '生成图片'}
      </Button>
      {isLoading && (
        <Box sx={{ width: '100%', mt: 2 }}>
          <LinearProgress variant="determinate" value={progress} />
          <Box sx={{ mt: 2, mb: 1 }}>
            <Typography variant="body2" color="text.secondary">{`${Math.round(progress)}%`}</Typography>
          </Box>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
      )}
      {error && <Typography color="error" sx={{ mt: 2 }}>{error}</Typography>}
      {generatedImages.length > 0 && (
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" gutterBottom>生成的图片</Typography>
          <Grid container spacing={2}>
            {generatedImages.map((url, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <img src={url} alt={`Generated image ${index + 1}`} style={{ width: '100%', borderRadius: '4px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }} />
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </Box>
  );
};

export default ImageGenerator;