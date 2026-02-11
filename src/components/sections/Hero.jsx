import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { personalInfo } from '../../data/personal';

const Hero = () => {
    const { hero } = personalInfo;

    return (
        <section
            id="home"
            className="section-lg flex-center"
            style={{ minHeight: '100vh', position: 'relative', overflow: 'hidden' }}
        >
            {/* Background Decorative Elements */}
            <div
                style={{
                    position: 'absolute',
                    top: '10%',
                    right: '5%',
                    width: '300px',
                    height: '300px',
                    background: 'var(--primary-600)',
                    filter: 'blur(150px)',
                    opacity: 0.2,
                    zIndex: -1,
                }}
            />
            <div
                style={{
                    position: 'absolute',
                    bottom: '10%',
                    left: '5%',
                    width: '250px',
                    height: '250px',
                    background: 'var(--accent-purple)',
                    filter: 'blur(150px)',
                    opacity: 0.2,
                    zIndex: -1,
                }}
            />

            <div className="container text-center">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    style={{
                        color: 'var(--primary-400)',
                        fontWeight: 'var(--font-semibold)',
                        letterSpacing: '2px',
                        marginBottom: 'var(--space-2)'
                    }}
                >
                    {hero.greeting}
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    style={{ marginBottom: 'var(--space-4)' }}
                >
                    <span className="text-gradient">{hero.name}</span>
                </motion.h1>

                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-6)' }}
                >
                    {hero.roles[0]}
                </motion.h3>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    style={{
                        maxWidth: '600px',
                        margin: '0 auto var(--space-10)',
                        fontSize: 'var(--text-lg)'
                    }}
                >
                    {hero.description}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="flex-center gap-6"
                >
                    <Link to="projects" smooth duration={500} className="btn btn-primary">
                        {hero.cta.primary}
                    </Link>
                    <Link to="contact" smooth duration={500} className="btn btn-outline">
                        {hero.cta.secondary}
                    </Link>
                </motion.div>
            </div>

            {/* Scroll Down Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{
                    position: 'absolute',
                    bottom: '2rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    color: 'var(--text-muted)',
                    cursor: 'pointer'
                }}
            >
                <Link to="about" smooth duration={500}>
                    <div style={{
                        width: '30px',
                        height: '50px',
                        border: '2px solid var(--text-muted)',
                        borderRadius: '15px',
                        display: 'flex',
                        justifyContent: 'center',
                        paddingTop: '10px'
                    }}>
                        <div style={{
                            width: '4px',
                            height: '8px',
                            background: 'var(--text-muted)',
                            borderRadius: '2px'
                        }} />
                    </div>
                </Link>
            </motion.div>
        </section>
    );
};

export default Hero;
