from interpreter import draw
from chessPictures import *
from interpreter import draw
from chessPictures import knight

#creamos un caballo negro
caballo_negro = knight.negative()

# Primera fila: creamos un caballo y con el metodo join 
#ponemos a su costado, con el metodo join el caballo negro
fila1 = knight.join(caballo_negro)

# Segunda fila: Hamos lo mismo que en el anterior 
#pero enest caso es caballo negro y luego el cabalo blaco
fila2 = caballo_negro.join(knight)

# Figura final: fila2 debajo de fila1
figura = fila2.up(fila1)

draw(figura)