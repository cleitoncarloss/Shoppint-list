import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabase = createClient(
  'https://gyezcramcvtfpcwcwbzt.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd5ZXpjcmFtY3Z0ZnBjd2N3Ynp0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg2NDY5MzUsImV4cCI6MjAyNDIyMjkzNX0.789_Mu3PGfJ5kIXl2x_1Bp76M6Cs54mmch-n1FQZrFw'
)

export default supabase
