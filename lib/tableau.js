function initViz() {
    var containerDiv = document.getElementById("tableauViz"),
    url = "https://public.tableau.com/shared/5H3TG86K4?:display_count=yes";
        
    var viz = new tableau.Viz(containerDiv, url); 
}

function initVizMap() {
    var containerDiv = document.getElementById("tableauVizMap"),
    url = "https://public.tableau.com/views/MapaCompleto/Dashboard1?:embed=y&:display_count=yes&publish=yes";
        
    var viz = new tableau.Viz(containerDiv, url); 
}


function initVizEvasao() {
    var containerDiv = document.getElementById("tableauVizEvasao"),
    url = "https://public.tableau.com/views/EvasoCCMC/Dashboard1?:embed=y&:display_count=yes&publish=yes";
 
    var viz = new tableau.Viz(containerDiv, url); 
}
