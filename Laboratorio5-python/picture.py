from colors import *
class Picture:
  def __init__(self, img):
    self.img = img;

  def __eq__(self, other):
    return self.img == other.img

  def _invColor(self, color):
    if color not in inverter:
      return color
    return inverter[color]

  def verticalMirror(self):
    """ Devuelve el espejo vertical de la imagen """
 
    return Picture([fila[::-1] for fila in self.img])

  def horizontalMirror(self):
    """ Devuelve el espejo horizontal de la imagen """
    return Picture(self.img[::-1])

  def negative(self):
    """ Devuelve un negativo de la imagen """
    nueva_img=[]
    for fila in self.img:
          nueva_fila=''.join([self._invColor(color) for color in fila])
          nueva_img.append(nueva_fila)
    return Picture(nueva_img)
  def join(self, p):
    """ Devuelve una nueva figura poniendo la figura del argumento 
        al lado derecho de la figura actual """
    nueva_img=[fila1+fila2 for fila1,fila2 in zip(self.img,p.img)]
    return Picture(nueva_img)
        

  def up(self, p):
    """ Devuelve una nueva figura poniendo la figura recibida como argumento, encima de la figura actual
    """
    return Picture(p.img + self.img)

  def under(self, p):
    """ Devuelve una nueva figura poniendo la figura p sobre la
        figura actual """
    return Picture(None)
  
  def horizontalRepeat(self, n):
    """ Devuelve una nueva figura repitiendo la figura actual al costado
        la cantidad de veces que indique el valor de n """
    return Picture(None)

  def verticalRepeat(self, n):
    return Picture(None)

  #Extra: Sólo para realmente viciosos 
  def rotate(self):
    """Devuelve una figura rotada en 90 grados, puede ser en sentido horario
    o antihorario"""
    return Picture(None)

