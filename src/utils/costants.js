// logos svg stack used
import htmlLogo from '@/assets/images/stack-tools/html.svg'
import cssLogo from '@/assets/images/stack-tools/css.svg'
import scssLogo from '@/assets/images/stack-tools/sass.svg'
import bootstrapLogo from '@/assets/images/stack-tools/bootstrap.svg'
import jsLogo from '@/assets/images/stack-tools/javascript.svg'
import tsLogo from '@/assets/images/stack-tools/typescript.svg'
import phpLogo from '@/assets/images/stack-tools/php.svg'
import vueLogo from '@/assets/images/stack-tools/vue.svg'
import reactLogo from '@/assets/images/stack-tools/react.svg'
import angularLogo from '@/assets/images/stack-tools/angular.svg'
import viteLogo from '@/assets/images/stack-tools/vite.svg'
import nodeLogo from '@/assets/images/stack-tools/node-js.svg'
import apiLogo from '@/assets/images/stack-tools/api-rest.svg'
import strapiLogo from '@/assets/images/stack-tools/strapi.svg'
import wordpressLogo from '@/assets/images/stack-tools/wordpress.svg'
import mysqlLogo from '@/assets/images/stack-tools/mysql.svg'
import ansibleLogo from '@/assets/images/stack-tools/ansible.svg'
import yamlLogo from '@/assets/images/stack-tools/yaml.svg'

// logos svg tools used
import vscodeLogo from '@/assets/images/stack-tools/vs-code.svg'
import gitLogo from '@/assets/images/stack-tools/git.svg'
import postmanLogo from '@/assets/images/stack-tools/postman.svg'
import figmaLogo from '@/assets/images/stack-tools/figma.svg'
import windowsLogo from '@/assets/images/stack-tools/windows.svg'
import powershellLogo from '@/assets/images/stack-tools/powershell.svg'

// static array name + svg image imported
export const stack = [
    { name: 'HTML5', logo: htmlLogo },
    { name: 'CSS3', logo: cssLogo },
    { name: 'SCSS', logo: scssLogo },
    { name: 'Bootstrap', logo: bootstrapLogo, moreLarge: true },
    { name: 'JavaScript', logo: jsLogo },
    { name: 'TypeScript', logo: tsLogo },
    { name: 'Vue.js', logo: vueLogo },
    { name: 'React', logo: reactLogo },
    { name: 'Angular', logo: angularLogo },
    { name: 'Node.js', logo: nodeLogo },
    { name: 'Strapi', logo: strapiLogo },
    { name: 'Vite', logo: viteLogo },
    { name: 'RESTful API', logo: apiLogo, moreLarge: true },
    { name: 'PHP', logo: phpLogo },
    { name: 'WordPress', logo: wordpressLogo },
    { name: 'MySql', logo: mysqlLogo },
    { name: 'Ansible', logo: ansibleLogo },
    { name: 'YAML', logo: yamlLogo }
];

// static array name + svg image imported
export const tools = [
    { name: 'VSCode', logo: vscodeLogo },
    { name: 'GIT', logo: gitLogo },
    { name: 'Postman', logo: postmanLogo },
    { name: 'Figma', logo: figmaLogo },
    { name: 'Windows', logo: windowsLogo },
    { name: 'Powershell', logo: powershellLogo }
];


// repo excluded from the projects list
export const excludedRepo = ['VUE', 'ANGULAR', 'REACT', 'C-', 'HTML-CSS', 'JavaScript', 'PHP', 'NodeJS', 'notspecia'];