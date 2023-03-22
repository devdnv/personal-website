import { getProjects } from '@/lib/projects';
import { cn } from '@/lib/utils';
import Section from '../layout/Section';
import LinkText from '../ui/LinkText';
import Tag from '../ui/Tag';

interface ProjectItemProps extends React.HTMLAttributes<HTMLDivElement> {
  projectTitle?: string;
  projectData?: {
    liveURL?: string;
    githubURL?: string;
    relatedLinks?: Array<{
      label?: string | React.ReactNode;
      link?: string;
    }>;
  };
  description?: string[];
  tech?: string[];
  category?: Array<
    'design' | 'community' | 'accessibilty' | 'ui/ux' | 'design-system'
  >;
  status?: 'Ongoing' | 'Open Source' | 'Maintained';
}

const ProjectSection: React.FunctionComponent = () => {
  return (
    <Section
      className="projects-section grid grid-cols-1 justify-start gap-4"
      id="projects">
      <h2 className="about-heading leading-snug font-medium text-base text-zinc-900">
        {'projects.'}
      </h2>
      <Section className="project-item-list-wrapper mt-4 grid grid-cols-1 justify-start gap-8">
        {getProjects()?.map(
          (project: ProjectItemProps, projectIndex: number) => (
            <ProjectItem {...project} key={projectIndex} />
          ),
        )}
      </Section>
    </Section>
  );
};

const ProjectItem: React.FunctionComponent<ProjectItemProps> = ({
  projectTitle,
  projectData,
  description,
  tech,
  category,
  status,
  className,
  ...attr
}) => {
  return (
    <div
      className={cn(
        'project-item border-l-2 pl-4 hover:border-orange-300 cursor-default transition-all',
        className,
      )}
      {...attr}>
      <div className="flex flex-row items-start justify-between max-md:flex-col max-md:justify-start max-md:gap-2 max-sm:w-[320px]">
        <span>
          <h3 className="project-title font-normal text-zinc-900 capitalize w-[46ch] max-md:w-[30ch]">
            {projectTitle}
          </h3>
          <div className="project-links-wrapper text-sm flex flex-row items-center justify-start gap-1.5">
            {projectData?.liveURL && (
              <LinkText
                className="text-xs font-normal text-zinc-500"
                href={projectData?.liveURL}
                target={'_blank'}>
                {'Live Preview'}
              </LinkText>
            )}
            {projectData?.githubURL && (
              <LinkText
                className="text-xs font-normal text-zinc-500"
                href={projectData?.githubURL}
                target={'_blank'}>
                {'GitHub'}
              </LinkText>
            )}
            {projectData?.relatedLinks?.map(
              (
                relatedLinkItem: {
                  label?: string | React.ReactNode;
                  link?: string;
                },
                relatedLinkIndex: number,
              ) => {
                if (relatedLinkItem?.link) {
                  return (
                    <LinkText
                      className="text-xs font-normal text-zinc-500"
                      href={relatedLinkItem?.link}
                      target={'_blank'}
                      key={relatedLinkIndex}>
                      {relatedLinkItem?.label}
                    </LinkText>
                  );
                }
              },
            )}
          </div>
        </span>
      </div>
      <div className="project-item-content-body-wrapper">
        <ul className="project-description-list-content-wrapper mt-4 flex flex-col items-start justify-start gap-2 pl-3">
          {description?.map((descriptionItem, descriptionIndex) => (
            <li
              className="font-normal text-zinc-500 text-sm list-disc list-outside"
              key={descriptionIndex}>
              {descriptionItem}
            </li>
          ))}
        </ul>
        <div className="project-category-tech-wrapper mt-4">
          <span className="project-category-wrapper text-sm text-gray-500">
            {'category: ' + category}
          </span>
          {/* <div className="project-tech-list-wrapper mt-2 flex flex-row items-center justify-start">
                {tech?.map((techItem: string, techIndex: number) => (
                    <p className='text- font-normal mr-1 text-gray-500' key={techIndex}>{tech.length - 1 === techIndex ? techItem : (techItem + ", ")}</p>
                ))}
            </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
export type { ProjectItemProps };
