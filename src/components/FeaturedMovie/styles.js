import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
    featuredCardContainer: {
        marginBottom: '20px',
        display: 'flex',
        justifyContent: 'center',
        height: '30rem',
        textDecoration: 'none',
    },
    card: {
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        flexDirection: 'column'
    },
    cardRoot: {
        position: 'relative',
    },
    cardMedia: {
        position: 'absolute',
        top: 0,
        right: 0,
        height: '100%',
        width: '100%',
        backgroundColor: 'rgb(0, 0, 0, 0.575)',
        backgroundBlendMode: 'darken',    
    },
    cardContent: {
        color: '#fff',
        width: '80%',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },    
    },
    cardContentRoot: {
        position: 'relative',
        backgroundColor:'transparent'
    }

}))