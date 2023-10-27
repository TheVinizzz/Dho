import { Box, Button, Container, Paper, TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Formik } from 'formik';
import ColorPicker from 'react-pick-color';
import useUser from './hooks/user';
import { toast } from 'react-toastify';

function App() {

  const { createUser } = useUser()

  return (
    <Container maxWidth="lg"
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Formik
        initialValues={{ 
          email: '', 
          cpf: '', 
          name: '', 
          color: "#000" 
        }}
        onSubmit={async (values, { resetForm }) => {
          try {
            await createUser(values)
            toast.success("Usuário enviado sucesso");
            resetForm()
          }
          catch(e) {
            toast.error("Houve um erro ao tentar enviar usuário, revise seus dados");
            console.log("Error", e)
          }
        }}
      >
        {({
          values,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          setFieldValue
        }) => (
          <form 
            onSubmit={handleSubmit}
            style={{
              height: "80%",
              width: "60%",
            }}
          >
            <Paper
              elevation={2}
              sx={{
                
                backgroundColor: "#c7ceda",
                padding: "30px",
                display: "flex",
                flexDirection: "column"
              }}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: "30px",
                  marginBottom: "30px"
                }}
                textAlign="center"
              >
                Cadastre um novo usuário
              </Typography>
              <TextField
                variant="standard"
                fullWidth
                placeholder='Ex: Ricardo Ribeiro'
                label="Nome completo"
                sx={{ marginBottom: "20px" }}
                inputProps={{
                  name: "name"
                }}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                required
              />
              <TextField
                variant="standard"
                fullWidth
                placeholder='Ex: 999.999.999-99'
                label="CPF"
                sx={{ marginBottom: "20px" }}
                inputProps={{
                  name: "cpf"
                }}
                name="cpf"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.cpf}
                required
              />
              <TextField 
                variant="standard" 
                fullWidth 
                placeholder='Ex: Admin@admin.com' 
                label="E-mail" 
                sx={{ marginBottom: "20px" }} 
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                required
              />
              <Typography
                variant="h2"
                sx={{
                  fontSize: "30px",
                  marginBottom: "30px"
                }}
                textAlign="center"
              >
                Escolha sua cor favorita
              </Typography>
              <Box sx={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "40px"
              }}
              >
                <ColorPicker
                  color={values.color}
                  onChange={color => setFieldValue("color", color.hex)}
                  theme={{
                    width: '320px',
                  }}
                />
              </Box>
              <Box sx={{ alignContent: "flex-end", marginTop: "50px" }}>
                <Button 
                  variant="contained" 
                  fullWidth
                  type="submit" 
                  disabled={isSubmitting}
                >
                  Enviar
                </Button>
              </Box>
            </Paper>
          </form>
        )}
      </Formik>

    </Container>
  )
}

export default App
