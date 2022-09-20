export function Project(props: {name:string, date:string, technology:string, description:string, link:string}) {
    return (
          <div class="flex flex-col w-full items-start py-12 px-4">
              <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                <div class="flex items-center flex-shrink-0">
                <span>{props.name}</span>
                    <a
                        href={props.link}
                        target={props.link}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24"
                        troke-width="1.5" 
                        stroke="currentColor" 
                        class="w-6 h-6">
                        <path stroke-linecap="round" 
                        stroke-linejoin="round" 
                        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>
                    </a>
                </div>
            </h2>
              <p class="mt-4 text-gray-500">{props.description}</p>
        
              <dl class="mt-16 grid grid-cols-6 gap-x-6 w-full">
                <div class="border-t border-gray-200 pt-4 col-span-3">
                  <dt class="font-medium text-gray-900">Technologies</dt>
                  <dd class="mt-2 text-sm text-gray-500">{props.technology}</dd>
                </div>
        
                <div class="border-t border-gray-200 pt-4 col-span-3">
                  <dt class="font-medium text-gray-900">Date</dt>
                  <dd class="mt-2 text-sm text-gray-500">{props.date}</dd>
                </div>
              </dl>
          </div>
        
    );
}