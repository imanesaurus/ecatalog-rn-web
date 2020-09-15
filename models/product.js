class Product {
  constructor(
    id,
    title,
    description,
    availability,
    inventory,
    condition,
    price,
    link,
    image_link,
    brand,
    google_product_category,
    sale_price,
    sale_price_effective_date,
    item_group_id,
    gender,
    color,
    size,
    age_group,
    material,
    pattern,
    product_type,
    shipping,
    shipping_weight,
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.availability = availability;
    this.inventory = inventory;
    this.condition = condition;
    this.price = price;
    this.link = link;
    this.image_link = image_link;
    this.brand = brand;
    this.google_product_category = google_product_category;
    this.sale_price = sale_price;
    this.sale_price_effective_date = sale_price_effective_date;
    this.item_group_id = item_group_id;
    this.gender = gender;
    this.color = color;
    this.size = size;
    this.age_group = age_group;
    this.material = material;
    this.pattern = pattern;
    this.product_type = product_type;
    this.shipping = shipping;
    this.shipping_weight = shipping_weight;
  }
}

export default Product;
