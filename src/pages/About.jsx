import { skills, experiences } from '../constants/index.js';
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { list } from 'postcss';
import CTA from '../components/CTA.jsx';

const About = () => {
    return (
        <section className="max-container">
            <h1 className="head-text">
                Hello, I'm{' '}
                <span className="blue-gradient_text font-semibold drop-shadow">
                    Lera
                </span>
            </h1>
            <div className="mt-5 flex flex-col gap-3 text-slate-500">
                <p>
                    Frontend developer with experience of creating easy-to-use
                    and attractive digital interfaces. I specialize in taking
                    complex ideas and turning them into user-friendly web apps
                    that people love to use. I'm passionate about beautiful
                    design, and I focus on making things not only look good but
                    work well and fast. I'm always learning and adapting to the
                    latest trends in web development, ready to take on new
                    challenges to meet the needs of modern technology.
                </p>
            </div>
            <div className="py-10 flex flex-col">
                <h3 className="subhead-text">My skills</h3>
                <div className="mt-16 flex flex-wrap gap-12">
                    {skills.map((skill, index) => (
                        <div key={index} className="block-container w-20 h-20">
                            <div className="btn-back rounded-xl" />
                            <div className="btn-front rounded-xl flex justify-center items-center">
                                <img
                                    src={skill.imageUrl}
                                    alt={skill.name}
                                    className="w-1/2 h-1/2 object-contain"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="py-16">
                <h3 className="subhead-text">Experience</h3>
                <div className="mt-5 flex flex-col gap-3 text-slate-500">
                    <p>
                        I've spent more than 2.5 years working alongside
                        talented developers, contributing to a range of projects
                        from e-commerce websites to interactive dashboards. Each
                        collaboration has been a learning experience, helping me
                        grow and refine my skills in building high-quality
                        products that meet client expectations.
                    </p>
                </div>

                <div className="mt-12 flex-container">
                    <VerticalTimeline>
                        {experiences.map((experience) => (
                            <VerticalTimelineElement
                                key={experience.company_name}
                                date={experience.date}
                                icon={
                                    <div className="flex justify-center items-center w-full h-full">
                                        <img
                                            src={experience.icon}
                                            alt={experience.company_name}
                                            className="w-[60%] h-[60%] object-contain rounded-full"
                                        />
                                    </div>
                                }
                                contentStyle={{
                                    borderBottom: '8px',
                                    borderStyle: 'solid',
                                    borderBottomColor: experience.iconBg,
                                    boxShadow: 'none',
                                }}
                                iconStyle={{
                                    background: experience.iconBg,
                                }}
                                className="vertical-timeline-element--work"
                            >
                                <div>
                                    <h3 className="text-black text-xl font-poppins font-semibold">
                                        {experience.title}
                                    </h3>
                                    <p
                                        style={{ margin: 0 }}
                                        className="text-black-500 font-medium font-base"
                                    >
                                        {experience.company_name}
                                    </p>
                                </div>

                                <ul className="my-5 list-disc ml-5 space-y-2">
                                    {experience.points.map((point, index) => (
                                        <li
                                            className="text-black-500/50 font-normal pl-1 text-sm"
                                            key={index}
                                        >
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </VerticalTimelineElement>
                        ))}
                    </VerticalTimeline>
                </div>
            </div>
            <hr className="border-slate-200" />
            <CTA />
        </section>
    );
};

export default About;
