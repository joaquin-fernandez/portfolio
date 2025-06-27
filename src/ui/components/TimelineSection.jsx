import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { IconEmoji } from './IconEmoji';
import { Typography } from '@mui/material';

const arrEvents = [
    {
        title: 'Senior Software Engineer',
        location: 'GlobalLogic Argentina',
        date: 'Febrero 2018 - Marzo 2025',
    },
    {
        title: 'IT Support',
        location: 'Universidad Tecnológica Nacional - FRLP',
        date: 'Junio 2015 - Marzo 2017',
    },
];

export const TimelineSection = ({ events = arrEvents, icon = '💼' }) => {
    return (
        <VerticalTimeline
            className='timelineCustom'
            lineColor='var(--mui-palette-secondary-main)'
        >
            {events.map((event, index) => (
                <VerticalTimelineElement
                    key={index}
                    className='vertical-timeline-element--work'
                    contentStyle={{
                        color: 'var(--mui-palette-primary-main)',
                        border: '1px solid var(--mui-palette-secondary-main)',
                        borderRadius: '10px',
                        boxShadow:
                            'var(--mui-palette-secondary-main) 0px 0px 24px',
                        backgroundColor:
                            'var(--mui-palette-primary-background)',
                    }}
                    contentArrowStyle={{
                        borderRight:
                            '10px solid var(--mui-palette-secondary-main)',
                    }}
                    date={event.date}
                    dateClassName='dateTimeline'
                    iconStyle={{
                        background: 'var(--mui-palette-secondary-main)',
                    }}
                    icon={<IconEmoji emoji={icon} />}
                >
                    <Typography
                        variant='h6'
                        sx={{ lineHeight: '1', fontWeight: 700 }}
                    >
                        {event.title}
                    </Typography>
                    <Typography
                        variant='body1'
                        sx={{
                            lineHeight: '1',
                            fontStyle: 'italic',
                            fontWeight: '300 !important',
                            mt: 0,
                        }}
                    >
                        {event.location}
                    </Typography>
                </VerticalTimelineElement>
            ))}
        </VerticalTimeline>
    );
};
