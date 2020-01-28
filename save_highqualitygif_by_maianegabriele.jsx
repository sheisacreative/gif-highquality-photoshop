// ------------------------------------------------------------------------------------------------------------------------------------------------------------------- //
// ----------------------------------------- DEVELOPED BY MAIANE ARAUJO | GRAPHIC DESIGNER ----------------------------------------- //
// ------------------------------------------------------------  :)      www.maiane.com.br    :)  ------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------- //

#target photoshop
app.bringToFront();


function saveGIF (fileName){
        
        var myFile = new File(doc.path + "/" + fileName + ".gif")
                
        var gifOptions = new GIFSaveOptions(); 
       
       
        // ----------------------- CHANGE YOUR SETTINGS HERE ----------------------- //
        
        //The type of palette to use. You can try to change "LOCALSELECTIVE" for:  EXACT, LOCALADAPTATIVE, MACOSPALETTE, MASTERADAPTATIVE, MASTERPERCEPTUAL, MASTERSELECTIVE, PREVIOUSPALETTE, UNIFORM, WEBPALETTE, WINDOWSPALETTE.
        gifOptions.palette = Palette.LOCALSELECTIVE;
        
        //The number of colors in the palette. From: 0 to 256.
        gifOptions.colors = 256;
        
        //The dither type. You can try to change "DIFFUSION" for: NOISE, NONE or PATTERN. 
        gifOptions.dither = Dither.DIFFUSION;
        
        //Only works if dither type is DIFFUSION. "True" protects colors in the image.
        gifOptions.preserveExactColors = true;        
        
        //This option is valid just when dither is set to "DIFFUSION". From: 0 to 100.
        gifOptions.ditherAmout = 100;
        
        //This defines that you're saving a GIF. You can try to change "COMPUTERSERVEGIF" for: JPEG, PNG-8, PNG-24 or BMP.
        gifOptions.format = SaveDocumentType.COMPUSERVEGIF; 
        
        //You can try to change "SELECTIVE" for: ADAPTATIVE, BLACKWHITE, CUSTOM, GRAYSCALE, MACINTOSH, PERCEPTUAL, RESTRICTIVE, SELECTIVE or WINDOWS.
        gifOptions.ColorReductionType = ColorReductionType.SELECTIVE;
        
        //The type of colors to force into the color palette. You can try to change "WEB" for: BLACKWHITE, NONE, PRIMARIES,WEB.
        gifOptions.forced = ForcedColors.NONE;
        
        //True to download in multiple passes; progressive. Options: true or false.
        gifOptions.interlaced = true;
        
        //The color to fill transparent areas of the image if transparency is off. ou can try to change "WHITE" for: BACKGROUND, BLACK, FOREGROUND, NETSCAPE, NONE, SEMIGRAY, WHITE.
        gifOptions.matte = MatteType.WHITE;
        
        //Defines if transparent areas of the image should be included. Options: true or false.
        gifOptions.transparency = true;       
        
        // -------------------------------------------------------------------------------------------- //
        
        doc.saveAs(myFile, gifOptions, true);
    
}


if (documents.length > 0) {
    
    var doc = activeDocument;
    var fileName = doc.name.replace(/.\w+$/,"");
    saveGIF(fileName);
    
    //If you don't want to show an alert everytime your image is saved you can just delete this line, or, simple insert // (two slashes) before the line as a way to make it a javascript comment.
    alert("God bless this script!"  + "\n" +  "Your gif is saved. Have a happy day. :)"  + "\n\n" + "Developed by: www.maiane.com.br");

} else {
    
    alert ("Hey! I was wondering... \n\nWhy don't you try to open a file before you save a gif?", "Bad feelings... :(");

};




