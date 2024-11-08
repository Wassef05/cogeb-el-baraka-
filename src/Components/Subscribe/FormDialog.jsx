import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import CircularProgress from '@mui/material/CircularProgress';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2'; // Importer SweetAlert2
import "./Subscribe.css";
import cogeb from "../../Assets/al baraka 1.png";
import { useTranslation } from 'react-i18next'; // Importer le hook pour la traduction

export default function FormDialog({ open, onClose }) {
  const { t } = useTranslation(); // Utilisation du hook pour obtenir les traductions
  const [formValues, setFormValues] = useState({
    email: '',
    from_name: '',
    message: '',
  });
  
  const [loading, setLoading] = useState(false); // État pour gérer le statut de chargement

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formValues.email || !formValues.from_name || !formValues.message) {
      alert(t('FormDialog.fill_all_fields')); // Utilisation de la clé de traduction
      return; 
    }

    setLoading(true); // Démarrer le spinner

    // Configuration d'EmailJS pour l'envoi de l'email
    emailjs.send('service_udjcccg', 'template_1uevcn8', formValues, 'MUUK8awC8Em0DrQPe')
      .then((result) => {
        console.log(result.text);
        setLoading(false); // Arrêter le spinner
        Swal.fire({
          title: t('FormDialog.success_title'), // Utilisation de la clé de traduction
          text: t('FormDialog.success_text'),   // Utilisation de la clé de traduction
          icon: 'success',
          confirmButtonText: 'OK'
        });
        setFormValues({ email: '', from_name: '', message: ''});
        onClose();
      }, (error) => {
        console.log(error.text);
        setLoading(false); // Arrêter le spinner
        Swal.fire({
          title: t('FormDialog.error_title'),  // Utilisation de la clé de traduction
          text: t('FormDialog.error_text'),    // Utilisation de la clé de traduction
          icon: 'error',
          confirmButtonText: 'OK'
        });
      });
  };

  return (
    <Dialog 
      open={open} 
      onClose={onClose} 
      maxWidth="sm" 
      fullWidth
      PaperProps={{
        style: {
          backgroundColor: 'rgb(222 223 233)',
          borderRadius: '60px',
        },
      }}
    >
      <form onSubmit={handleSubmit}>
      <div style={{ textAlign: 'center', padding: '20px', color: '#fff' }}>
          <img src={cogeb} alt="Silver Line Solution" style={{ width: '80px', height: 'auto', margin: '0 auto' }} />
        </div>
        <DialogContent style={{ color: '#fff' }}>
          <TextField
            autoFocus
            name="email"
            label={t('FormDialog.email')} // Traduction du label
            type="email"
            fullWidth
            variant="outlined"
            value={formValues.email}
            onChange={handleChange}
            className="textfield-root"
          />
          <TextField
            margin="dense"
            name="from_name"
            label={t('FormDialog.name')} // Traduction du label
            type="text"
            fullWidth
            variant="outlined"
            value={formValues.from_name}
            onChange={handleChange}
            className="textfield-root"
          />
          <TextField
            margin="dense"
            name="message"
            label={t('FormDialog.message')} // Traduction du label
            type="text"
            multiline
            rows={4}
            fullWidth
            variant="outlined"
            value={formValues.message}
            onChange={handleChange}
            className="textfield-root"
          />
        </DialogContent>
        <DialogActions className="button-container" style={{ justifyContent: 'center' }}>
          <Button 
            type="submit"
            style={{
              color: '#C9961A',
              background: 'rgba(205, 198, 198, 0.36)',
              border: '2px solid #C9961A',
              fontFamily: "'Playfair Display', serif",
              position: 'relative'
            }}
            disabled={loading} // Désactiver le bouton pendant le chargement
          >
            {loading ? <CircularProgress size={24} style={{ color: '#C9961A' }} /> : t('FormDialog.submit')}  
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
