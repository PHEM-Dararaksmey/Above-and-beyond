class Car:
    def init(self, make, model, year, color):
        self._make = make
        self._model = model
        self._year = year
        self._color = color

    def get_make(self):
        return self._make

    def set_make(self, make):
        self._make = make

    def get_model(self):
        return self._model

    def set_model(self, model):
        self._model = model

    def get_year(self):
        return self._year

    def set_year(self, year):
        self._year = year

    def get_color(self):
        return self._color

    def set_color(self, color):
        self._color = color

    def str(self):
        return f"{self._year} {self._make} {self._model} ({self._color})"


# Creating an instance of Car
my_car = Car("Toyota", "Camry", 2020, "blue")

# Printing car details using str method
print(my_car)

# Updating car details using setter methods
my_car.set_color("red")
my_car.set_year(2021)

# Printing updated car details
print(my_car)