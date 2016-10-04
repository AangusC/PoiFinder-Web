poiApp.service("RepoPois",function(){
    var self = this;
    
    self.pois = [        
		new Local({nombre: "Analdo", coordenada: new Point(-34.546562, -58.556038), horarios: new Horario(12,00,16,00),distanciaMinCercania:0.5,direccion :"Lava 82"}),
        new Colectivo({nombre:78,paradas:[new Point(-34.548845, -58.553234),new Point(-34.549871, -58.551947)]}),
        new Cgp({comuna:new Comuna(1,[new Point(-34.508278, -58.479405),new Point(-34.516642, -58.475876),new Point(-34.517631, -58.488267)]),
            servicio:[  new Servicio({nombre:"Rentas",horarios: new Horario(12,0,20,0),diasAtencion:["lunes"]}),
                        new Servicio({nombre:"Registro Civil", horarios:new Horario(14,0,21,0)}),
                        new Servicio({nombre:"Defensa del Consumidor", horarios:new Horario(8,0,12,0)}),
                        new Servicio({nombre:"Participación Ciudadana",horarios: new Horario(12,0,20,0)})
                    ],direccion : "Lavalleja 582"}),
        new Banco({nombre:"galicia", coordenada: new Point(-34.546562, -58.556038),direccion : "leja 582"})
    ];

    self.getPois= function(nombre) {
        return _.filter(self.pois,function(pois){pois.matcherXNombre(nombre)})
    };
});

