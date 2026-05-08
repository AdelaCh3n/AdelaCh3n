extends Sprite2D


@onready var clothes = $clothes

func _ready():
	hide_all()
	
func hide_all():
	for c in clothes.get_children():
		c.visible = false

func show_clothes(index):
	for i in range(clothes.get_child_count()):
	
		var c = clothes.get_child(i)
		c.visible = (i == index)
		print(i,c.name,c.visible)
		

func _on_0_pressed() -> void:
	show_clothes(0);
	print("0")
func _on_1_pressed() -> void:
	show_clothes(1);
	print("1")
func _on_2_pressed() -> void:
	show_clothes(2);
	print("2")
func _on_3_pressed() -> void:
	show_clothes(3);
	print("3")
func _on_4_pressed() -> void:
	show_clothes(4);
	print("4")
func _on_5_pressed() -> void:
	show_clothes(5);
	print("5")
	
