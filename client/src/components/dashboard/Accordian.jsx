import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles({
    root: {
        width: '100%',
        marginTop: '40px',
        border: '1px solid #E4E4E4',
        borderRadius: '4px',

    },
    //   according: {

    //   },
});

export default () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>

            <Accordion >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-label="Expand"
                    aria-controls="additional-actions1-content"
                    id="additional-actions1-header"
                >
                    <FormControlLabel
                        aria-label="Acknowledge"
                        onFocus={(event) => event.stopPropagation()}
                        control={<Checkbox />}
                        label="Create a Blog"
                    />
                </AccordionSummary>
                <AccordionDetails>
                    <Typography color="textSecondary">
                        Create a Blog
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-label="Expand"
                    aria-controls="additional-actions2-content"
                    id="additional-actions2-header"
                >
                    <FormControlLabel
                        aria-label="Acknowledge"
                        onClick={(event) => event.stopPropagation()}
                        onFocus={(event) => event.stopPropagation()}
                        control={<Checkbox />}
                        label="Organize your blogs"
                    />
                </AccordionSummary>
                <AccordionDetails>
                    <Typography color="textSecondary">
                        Organize Your blogs
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-label="Expand"
                    aria-controls="additional-actions3-content"
                    id="additional-actions3-header"
                >
                    <FormControlLabel
                        aria-label="Acknowledge"
                        onClick={(event) => event.stopPropagation()}
                        onFocus={(event) => event.stopPropagation()}
                        control={<Checkbox />}
                        label="Make your API accessible"
                    />
                </AccordionSummary>
                <AccordionDetails>
                    <Typography color="textSecondary">
                        Make your API accessible
                  </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}