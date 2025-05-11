from interpreter import draw
from chessPictures import *
from interpreter import draw
from chessPictures import knight

#Creamos un caballo negro
caballo_negro = knight.negative()

# Primera fila: creamos un caballo y con el metodo join 
#ponemos a su costado el caballo negro
fila1 = knight.join(caballo_negro)

# Segunda fila:invertimos la primera fila
fila2=fila1.verticalMirror()

# Figura final: fila2 debajo de fila1
figura = fila2.up(fila1)

draw(figura)