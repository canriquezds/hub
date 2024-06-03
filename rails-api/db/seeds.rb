require 'csv'

csv_file_path = Rails.root.join('db', 'post_seeds.csv')

CSV.foreach(csv_file_path, headers: true) do |row|
  Post.create(
    post_id: row['post_id'],
    hash_id: row['hash_id'],
    source: row['source'],
    metadata: row['metadata'],
    filename: row['filename']
  )
end
