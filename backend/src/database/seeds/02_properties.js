/**
 * Seed properties table with initial data
 * @param {object} knex - Knex instance
 * @returns {Promise} Promise resolving to completed seed
 */
exports.seed = async function(knex) {
  // Delete existing entries
  await knex('properties').del();
  
  // Insert seed data
  return knex('properties').insert([
    {
      id: 1,
      title: 'Luxury Apartment Building',
      description: 'A premium 50-unit apartment building in downtown with high rental yields.',
      address: '123 Main Street, New York, NY 10001',
      city: 'New York',
      state: 'NY',
      country: 'USA',
      zip_code: '10001',
      property_type: 'residential',
      square_feet: 45000,
      year_built: 2015,
      purchase_price: 15000000,
      current_value: 18000000,
      rental_income: 1200000,
      expenses: 400000,
      net_income: 800000,
      cap_rate: 5.3,
      images: JSON.stringify(['building1.jpg', 'lobby1.jpg', 'apartment1.jpg']),
      status: 'active',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id: 2,
      title: 'Commercial Office Tower',
      description: 'A 15-story office building with premium amenities and 95% occupancy rate.',
      address: '456 Business Ave, Chicago, IL 60601',
      city: 'Chicago',
      state: 'IL',
      country: 'USA',
      zip_code: '60601',
      property_type: 'commercial',
      square_feet: 120000,
      year_built: 2010,
      purchase_price: 35000000,
      current_value: 42000000,
      rental_income: 3500000,
      expenses: 1200000,
      net_income: 2300000,
      cap_rate: 6.5,
      images: JSON.stringify(['office1.jpg', 'reception1.jpg', 'conference1.jpg']),
      status: 'active',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id: 3,
      title: 'Retail Shopping Center',
      description: 'A neighborhood shopping center with 15 retail units and strong anchor tenants.',
      address: '789 Retail Road, Los Angeles, CA 90001',
      city: 'Los Angeles',
      state: 'CA',
      country: 'USA',
      zip_code: '90001',
      property_type: 'retail',
      square_feet: 75000,
      year_built: 2005,
      purchase_price: 22000000,
      current_value: 25000000,
      rental_income: 2100000,
      expenses: 800000,
      net_income: 1300000,
      cap_rate: 5.9,
      images: JSON.stringify(['retail1.jpg', 'storefront1.jpg', 'parking1.jpg']),
      status: 'active',
      created_at: new Date(),
      updated_at: new Date()
    }
  ]);
};
