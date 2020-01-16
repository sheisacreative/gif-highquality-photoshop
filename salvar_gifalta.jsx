// --------------------------------------------------------------------------------------------------------------------------------- //
// ----------------------------------------- DEVELOPED BY MAIANE ARAUJO | GRAPHIC DESIGNER ----------------------------------------- //
// --------------------------------------------  :)      www.maiane.com.br    :)  -------------------------------------------------- //
// --------------------------------------------------------------------------------------------------------------------------------- //

doc = activeDocument

function salvarGIF (nome){
        
        var meuArquivo = new File(doc.path + "/" + nome + ".gif")
        
        var options = new ExportOptionsSaveForWeb();
        options.format = SaveDocumentType.COMPUSERVEGIF;
        options.colorReduction = ColorReductionType.SELECTIVE;
        options.dither = Dither.NONE;
        options.quality = 0;
        options.colors = 256;
        options.blur = 0.0;
        options.transparencyDither = Dither.NONE
        options.ditherAmout = 100
        options.includeProfile = false
        options.interlaced = true
        options.lossy = 0
        options.optimized = true
        //options.quality = 100 :( zoou tudo.
        options.transparency = true
        options.transparencyAmount = 100
        options.webSnap = 0
        
        doc.exportDocument(meuArquivo, ExportType.SAVEFORWEB, options)
    
    }


var nome = doc.name.replace(/.\w+$/,"")

salvarGIF(nome)
alert("Gif salvo! Tenha um dia animado. :)") 
