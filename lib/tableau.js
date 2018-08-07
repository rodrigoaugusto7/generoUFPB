function initViz() {
    var containerDiv = document.getElementById("tableauViz"),
    url = "https://public.tableau.com/shared/5H3TG86K4?:display_count=yes";
        
    var viz = new tableau.Viz(containerDiv, url); 
}