import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {

  constructor(
    @InjectRepository(Product)
    private repo:Repository<Product>
  ){}


  createProduct(data:Partial<Product>){
    
    return this.repo.save(data);
  }

  findOne(id:string){
    const product=this.repo.findOneBy({id});
    if(!product) throw new NotFoundException("Product Not Found");
    return product;


  }
}
