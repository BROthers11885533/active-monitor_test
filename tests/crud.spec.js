const { Builder, By } = require("selenium-webdriver");


describe("CRUD", () => 
{
    it("Crud para registro de documentos", async () => 
    {
        
        let driver = new Builder().forBrowser("chrome").build();
        try {
            
            //Prueba 1
            await driver.get("file:///C:/Users/18492/Desktop/active-monitorpg3F/index.html");
            await driver.sleep(3000);

            //prueba 2
            await driver.manage().window().maximize();
            await driver.sleep(3000);
    
            //prueba 3
            await driver.findElement(By.id("nombre")).sendKeys("Jose");
            await driver.sleep(3000);

            //prueba 4
            await driver.findElement(By.id("puesto")).sendKeys("Gerente");
            await driver.sleep(3000);

            //prueba 5
            await driver.findElement(By.id("departamento")).sendKeys("Departamento de control y calidad");
            await driver.sleep(3000);

            //prueba 6
            await driver.findElement(By.id("horaLlegada")).sendKeys("7:00am");
            await driver.sleep(3000);

            //prueba 7
            await driver.findElement(By.id("horaAlmuerzo")).sendKeys("12:15pm");
            await driver.sleep(3000);

            //prueba 8
            await driver.findElement(By.id("horaSalida")).sendKeys("5:00pm");
            await driver.sleep(3000);

            //prueba 9
            await driver.findElement(By.id("btnAgregar")).click();
            await driver.sleep(4000);

             //Confirmar si la parte de edicion funciona:

            //prueba 10
            await driver.findElement(By.className("btn btn-editar")).click();
            await driver.sleep(4000);

            //prueba 11
            await driver.findElement(By.id("nombre")).clear();
            await driver.sleep(3000);
            await driver.findElement(By.id("nombre")).sendKeys("Alberto");
            await driver.sleep(3000);
            
 
            //prueba 12
             await driver.findElement(By.id("puesto")).clear();
             await driver.sleep(3000);
             await driver.findElement(By.id("puesto")).sendKeys("Supervisor");
             await driver.sleep(3000);
 
             //prueba 13
             await driver.findElement(By.id("departamento")).clear();
             await driver.sleep(3000);
             await driver.findElement(By.id("departamento")).sendKeys("Departamento de pintura");
             await driver.sleep(3000);
 
             //prueba 14
             await driver.findElement(By.id("horaLlegada")).clear();
             await driver.sleep(3000);
             await driver.findElement(By.id("horaLlegada")).sendKeys("8:00am");
             await driver.sleep(3000);
 
             //prueba 15
             await driver.findElement(By.id("horaAlmuerzo")).clear();
             await driver.sleep(3000);
             await driver.findElement(By.id("horaAlmuerzo")).sendKeys("1:00pm");
             await driver.sleep(3000);
 
             //prueba 16
             await driver.findElement(By.id("horaSalida")).clear();
             await driver.sleep(3000);
             await driver.findElement(By.id("horaSalida")).sendKeys("7:00pm");
             await driver.sleep(3000);

             //prueba 17
             await driver.findElement(By.id("btnAgregar")).click();
             await driver.sleep(4000);

             //Prueba 18: probar si la pagina muestra un mensaje cuando se dejan campos vacios
             await driver.findElement(By.className("btn btn-editar")).click();
             await driver.sleep(3000);
             await driver.findElement(By.id("nombre")).clear();
             await driver.sleep(3000);
             await driver.findElement(By.id("btnAgregar")).click();
             await driver.sleep(4000);
             await driver.findElement(By.id("nombre")).sendKeys("Alberto");
             await driver.sleep(3000);
             await driver.findElement(By.id("btnAgregar")).click();
             await driver.sleep(3000);

             //prueba 19: probar si se registran varios empleados.
             await driver.findElement(By.id("nombre")).sendKeys("Maria");
             await driver.sleep(3000);
             await driver.findElement(By.id("puesto")).sendKeys("contable");
             await driver.sleep(3000);
             await driver.findElement(By.id("departamento")).sendKeys("Departamento de finanza");
             await driver.sleep(3000);
             await driver.findElement(By.id("horaLlegada")).sendKeys("6:30am");
             await driver.sleep(3000);
             await driver.findElement(By.id("horaAlmuerzo")).sendKeys("1:00pm");
             await driver.sleep(3000);
             await driver.findElement(By.id("horaSalida")).sendKeys("7:00pm");
             await driver.findElement(By.id("btnAgregar")).click();
             await driver.sleep(3000);
             await driver.sleep(3000);
             await driver.findElement(By.id("nombre")).sendKeys("Francisco");
             await driver.sleep(3000);
             await driver.findElement(By.id("puesto")).sendKeys("Mayordomo");
             await driver.sleep(3000);
             await driver.findElement(By.id("departamento")).sendKeys("Departamento de limpieza");
             await driver.sleep(3000);
             await driver.findElement(By.id("horaLlegada")).sendKeys("6:00am");
             await driver.sleep(3000);
             await driver.findElement(By.id("horaAlmuerzo")).sendKeys("12:00pm");
             await driver.sleep(3000);
             await driver.findElement(By.id("horaSalida")).sendKeys("5:00pm");
             await driver.sleep(3000);
             await driver.findElement(By.id("btnAgregar")).click();
             await driver.sleep(4000);

             //prueba 20
             await driver.findElement(By.className("btn btn-eliminar")).click();
             await driver.sleep(3000);
             await driver.findElement(By.className("btn btn-eliminar")).click();
             await driver.sleep(3000);
             await driver.findElement(By.className("btn btn-eliminar")).click();
             await driver.sleep(3000);


             }finally {
            
                await driver.quit();
             }



            
    });
});