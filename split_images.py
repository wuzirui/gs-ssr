from PIL import Image
import os

def split_image(image_path, output_dir, margin=13):
    # 创建输出目录
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    # 打开图片
    img = Image.open(image_path)
    width, height = img.size

    # 计算单个图片的尺寸（减去白边）
    single_width = (width - margin * 2) // 5
    single_height = (height - margin * 2) // 5

    # 场景和通道名称
    scenes = range(1, 6)  # 1-5
    channels = ['gt', 'rendered', 'albedo', 'roughness', 'consistency']

    # 切分图片
    for i, scene in enumerate(scenes):
        for j, channel in enumerate(channels):
            # 计算裁剪区域（包含白边，并向内收缩3px）
            blood_margin = 4
            left = margin + j * (single_width) + blood_margin
            top = margin + i * (single_height) + blood_margin
            right = left + single_width - 2 * blood_margin
            bottom = top + single_height - 2 * blood_margin

            # 裁剪并保存图片
            cropped = img.crop((left, top, right, bottom))
            output_path = os.path.join(output_dir, f'scene{scene}_{channel}.png')
            cropped.save(output_path)
            print(f'Saved {output_path}')

    print('Image splitting completed!')

if __name__ == '__main__':
    # 设置路径
    input_path = 'public/static/images/channels_full.jpg'
    output_dir = 'public/static/images/channels'
    
    # 执行切分
    split_image(input_path, output_dir) 